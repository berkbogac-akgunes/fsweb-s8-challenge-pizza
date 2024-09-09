import { useState } from 'react';
import "./Form.css"
import { Label } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from "./Check"

const initialForm = {
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: ""
}

function Form() {
    const [formData, setFormData] = useState(initialForm)

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
        }

        console.log(formData)
    return(
        <div className = "form">
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
    <p>En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>
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
    <section className = "siparis-notu">
    <h3>Sipariş Notu</h3>
    <textarea
    name = "siparisNotu"
    type = "textarea" 
    onChange = {handleChange} 
    placeholder="Siparişine eklemek istediğin bir not var mı?">
    </textarea>
    </section>
    </div>
    )
}

export default Form