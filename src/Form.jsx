import { useState } from 'react';
import "./Form.css"
import { Button, ButtonGroup, FormFeedback, Label } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from "./Check"

const initialForm = {
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    isim: ""
}

const errorMessages = {
    isim: 'İsim en az 3 harf olmalı.',
}

function Form() {
    const [formData, setFormData] = useState(initialForm)
    const [count, setCount] = useState(0);
    const [errors, setErrors] = useState({
        boyut: false,
        hamur: false,
        malzemeler: false,
        isim: false,
        count: false
    })
    console.log(errors)
    const [isValid, setIsValid] = useState(false)

    const increaseCount = () => { 
        setCount(count + 1); 
      }; 
     
      const decreaseCount = () => {
        if (count > 0) {
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

    function handleChange(event) {
        let { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            if (formData.malzemeler.includes(value)) {
              setFormData({
                ...formData,
                [name]: formData.malzemeler.filter((malzeme) => malzeme !== value),
              });
            } else {
              setFormData({
                ...formData,
                [name]: [...formData.malzemeler, value],
              });
            }
          } else {
            setFormData({ ...formData, [name]: value });
          }

        if(name === "isim") {
            if(value.length < 3) {
                setErrors({...errors, [name]: true})
            } else {
                setErrors({...errors, [name]: false})
            }
        }
    }

        console.log(formData)
    return(
        <div className = "form">
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
        <Button>
            SİPARİŞ VER
        </Button>
    </section>
    </div>
    </div>
    )
}

export default Form