import { useState } from 'react';
import "./Form.css"
import { Label } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from "./Check"

const initialForm = {
    boyut: "",
    hamur: "",
    malzemeler: []
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
        //...
    }
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
                />
                Küçük
            </Label>
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "medium"
                />
                Orta
            </Label>
            <Label>
                <input
                    type = "radio"
                    name = "boyut"
                    value = "large"
                />
                Büyük
            </Label>
    </section>
    <section className = "hamur-section">
    <h3>Hamur Seç</h3>
    <select name = "hamur">
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
        {ing.map((malzeme) => <Check
            groupName = "malzemeler"
            value = {malzeme.value} 
            label = {malzeme.label}
            //changefn = {handleChange} 
            //isChecked = {formData.malzemeler.includes(malzeme.value)} 
            />
    )}
    </div>
    </section>
        </div>
    )
}

export default Form