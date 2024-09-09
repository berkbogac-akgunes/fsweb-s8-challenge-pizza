import { Label } from "reactstrap"

function Check({ changeFn, isChecked, groupName, value, label }) {
    return(
        <Label>
            <input
            type = "checkbox"
            name = {groupName}
            value = {value}
            //onChange = {changeFn}
            //checked = {isChecked}
            />{' '}
            {label}
        </Label>
    )
}

export default Check