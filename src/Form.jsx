import { useEffect, useState } from 'react';
import "./Form.css"
import { Button, ButtonGroup, FormFeedback, Label } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from "./Check"
import axios from "axios"
import { NavLink, useHistory } from "react-router-dom"
const initialForm = {
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    isim: ""
}
const errorMessages = {
    isim: 'İsim en az 3 harf olmalı.',
    malzemeler: "Lütfen en az 4, en fazla 10 malzeme seçiniz."
}
function Form() {
    const [formData, setFormData] = useState(initialForm)
    const [count, setCount] = useState(1);
    const [errors, setErrors] = useState({
        boyut: true,
        hamur: true,
        malzemeler: false,
        isim: false,
    })
    console.log(errors)
    const [isValid, setIsValid] = useState(false)

    const increaseCount = () => { 
        setCount(count + 1); 
      }; 
     
      const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        } 
      }; 
    const ing = [{
        value: "pepperoni",
        label: "Pepperoni"
    },
    {
        value: "domates",
        label: "Domates"
    },
    {
        value: "biber",
        label: "Biber"
    },
    {
        value: "sosis",
        label: "Sosis"
    },
    {
        value: "mısır",
        label: "Mısır"
    },
    {
        value: "sucuk",
        label: "Sucuk"
    },
    {
        value: "jambon",
        label: "Jambon"
    },
    {
        value: "ananas",
        label: "Ananas"
    },
    {
        value: "tavuk",
        label: "Tavuk"
    },
    {
        value: "jalepeno",
        label: "Jalepeno"
    },
    {
        value: "kabak",
        label: "Kabak"
    },
    {
        value: "soğan",
        label: "Soğan"
    },
    {
        value: "sarımsak",
        label: "Sarımsak"
    }]


    useEffect(() => {
        if(
            formData.boyut && 
            formData.hamur &&
            formData.isim.replaceAll(" ", "").length >= 3 &&
            formData.malzemeler.length >= 4 && formData.malzemeler.length <= 10
        ) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [formData])

    function handleChange(event) {
        let { name, value, type, checked } = event.target;
        let newValue;
        if (type === 'checkbox') {
            if (formData.malzemeler.includes(value)) {
                newValue = formData.malzemeler.filter((malzeme) => malzeme !== value)
            } else {
                newValue = [...formData.malzemeler, value]
            };

            setFormData({...formData, [name]: newValue})

          } else {
            setFormData({ ...formData, [name]: value });
          }
        if(name === "isim") {
            if(value.replaceAll(" ", "").length < 3) {
                setErrors({...errors, [name]: true})
            } else {
                setErrors({...errors, [name]: false})
            }
        }
        if(name === "boyut") {
            if(value) {
                setErrors({...errors, [name]: false})
            } else {
                setErrors({...errors, [name]: true})
            }
        }
        if(name === "hamur") {
            if(value) {
                setErrors({...errors, [name]: false})
            } else {
                setErrors({...errors, [name]: true})
            }
        }

        if(name === "hamur") {
            if(value) {
                setErrors({...errors, [name]: false})
            } else {
                setErrors({...errors, [name]: true})
            }
        }

        if(name === "malzemeler") {
            if(newValue.length < 4 || newValue.length > 10) {
                //there is a problem here with checks? Prob about Async State
                setErrors({...errors, [name]: true})
            } else {
                setErrors({...errors, [name]: false})
            }
        }
    }
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault();
        axios
          .post('https://reqres.in/api/pizza', formData, count)
          .then((response) => {
            console.log(
                {
                    "isim": response.data.isim,
                    "boyut": response.data.boyut,
                    "malzemeler": response.data.malzemeler,
                    "hamur": response.data.hamur,
                    "siparisNotu": response.data.siparisNotu,
                    "adet": count
                }
            )
            history.push("/onay")
          })
          .catch((error) => {
            console.log(error.message)
          });
      }
    return(
        <form className = "form" onSubmit={handleSubmit}>
            <section className = "menu-content">
                <h4>Position Absolute Acı Pizza</h4>
                <div className = "menu-info">
                <p className = "menu-fiyat">85.50₺</p>
                    <div className = "menu-info-right">
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <p className = "menu-aciklamasi">
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                    çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                    genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir
                    pizzaya bazen pizzetta denir.
                </p>
            </section>
        <div className = "boyut-hamur-section">
        <section className = "boyut-section">
        <h3>Boyut Seç</h3>
            <div className = "boyut-container">
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "small"
                    onChange = {handleChange}
                />
                Küçük
            </Label>
            </div>
            <div className = "boyut-container">
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "medium"
                    onChange = {handleChange}
                />
                Orta
            </Label>
            </div>
            <div className = "boyut-container">
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "large"
                    onChange = {handleChange}
                />
                Büyük
            </Label>
            </div>
            <p className = "error">{errors.boyut && errorMessages.boyut}</p>
    </section>
    <section className = "hamur-section">
    <h3>Hamur Seç</h3>
    <select onChange = {handleChange} name = "hamur">
        <option disabled hidden selected>Hamur Kalınlığı</option>
        <option value = "thin">İnce Hamur</option>
        <option value = "thick">Kalın Hamur</option>
    </select>
    </section>
    </div>
    <section className = "malzemeler">
    <h3>Ek Malzemeler</h3>
    <p>En Az 4, En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
    <div className = "check">
        {ing.map((malzeme, index) => <Check
            key = {index}
            type = "checkbox"
            changeFn = {handleChange}
            isChecked = {formData.malzemeler.includes(malzeme.value)}
            groupName = "malzemeler"
            value = {malzeme.value}
            label = {malzeme.label}
        />
        )}
        <p className = "error">{errors.malzemeler && errorMessages.malzemeler}</p>
    </div>
    </section>
    <section className = "isim-info">
        <p>Sipariş Verenin Adı Soyadı:</p>
        <input
            placeholder = "İsminizi buraya yazınız."
            type="text"
            name="isim"
            value={formData.isim}
            onChange={handleChange}
            />
    </section>
    <p className = "error">{errors.isim && errorMessages.isim}</p>
    <section className = "siparis-notu">
    <h3>Sipariş Notu</h3>
    <textarea
    name = "siparisNotu"
    type = "textarea" 
    onChange = {handleChange} 
    placeholder="Siparişine eklemek istediğin bir not var mı?">
    </textarea>
    </section>
    <div className = "bottom-page">
    <section className = "adet-section">
    <ButtonGroup>
        <Button onClick = {decreaseCount} className = "decrease-button">
            -
        </Button>
        <p>{count}</p>
        <Button onClick = {increaseCount} className = "increase-button">
            +
        </Button>
</ButtonGroup>
    </section>
    <section className = "siparis-section">
        <h5>Sipariş Toplamı</h5>
        <div className = "secimler-fiyat-section">
            <p>Seçimler</p>
            <p>25.00₺</p>
        </div>
        <div className = "toplam-fiyat-section">
        <p>Toplam</p>
        <p>110.50₺</p>
        </div>
            <Button disabled = {!isValid} type = "submit">
                SİPARİŞ VER
            </Button>
    </section>
    </div>
    </form>
    )
}
export default Form