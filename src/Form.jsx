import { useEffect, useState } from 'react';
import "./Form.css"
import { Button, ButtonGroup, FormFeedback, Label } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from "./Check"
import axios from "axios"
import { NavLink } from "react-router-dom"

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
    console.log(formData.malzemeler)

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
            !errors.boyut && 
            !errors.hamur &&
            formData.isim.length >= 3 &&
            formData.malzemeler.length >= 4 &&
            formData.malzemeler.length <= 10
        ) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [formData])

    function handleChange(event) {
        let { name, value, type } = event.target;
        let newValue;

        if (type === 'checkbox') {
            if (formData.malzemeler.includes(value)) {
              newValue = formData.malzemeler.filter((malzeme) => malzeme !== value)
            } else {
              newValue = [...formData.malzemeler, value]
              };
          
            setFormData({...formData.malzemeler, [name]: newValue})
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

        if(name === "malzemeler") {
            if(newValue.length < 4 || newValue.length > 10) {
                setErrors({...errors, [name]: true})
            } else {
                setErrors({...errors, [name]: false})
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
          .post('https://reqres.in/api/pizza', formData)
          .then((response) => {
            console.log(
                {
                    "isim": response.data.isim,
                    "boyut": response.data.boyut,
                    "malzemeler": response.data.malzemeler,
                    "hamur": response.data.hamur,
                    "siparisNotu": response.data.siparisNotu
                }
            )
          })
          .catch((error) => {
            console.log(error.message)
          });
      }
      console.log("isValid: " + isValid)
    return(
        <form className = "form" onSubmit={handleSubmit}>
            <section className = "menu-content">
                <h4>{"{Menu İsmi}"}</h4>
                <div className = "menu-info">
                <p className = "menu-fiyat">{"{Menu Fiyatı}"}</p>
                    <div className = "menu-info-right">
                        <p>{"{Menu Puanı}"}</p>
                        <p>{"{Menu Puanı}"}</p>
                    </div>
                </div>
                <p className = "menu-aciklamasi">{"{Menu Açıklaması}"}</p>
            </section>
        <div className = "boyut-hamur-section">
        <section className = "boyut-section">
        <h3>Boyut Seç</h3>
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "small"
                    onChange = {handleChange}
                />
                Küçük
            </Label>
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "medium"
                    onChange = {handleChange}
                />
                Orta
            </Label>
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "large"
                    onChange = {handleChange}
                    invalid = {true}
                />
                Büyük
            </Label>
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
        {errors.malzemeler && <p className="error">{errorMessages.malzemeler}</p>}
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
            <p>{"{Price}"}</p>
        </div>
        <div className = "toplam-fiyat-section">
        <p>Toplam</p>
        <p>{"{Price}"}</p>
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