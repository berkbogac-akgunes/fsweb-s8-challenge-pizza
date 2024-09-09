import { Label } from "reactstrap"

function Check(props) {

    const { changeFn, isChecked, groupName, value, label } = props
    
    return(
        <>
        <Label>
            <input
            type = "checkbox"
            name = {groupName}
            label = {label}
            value = {value}
            onChange = {changeFn}
            checked = {isChecked}
            />{' '}
            {label}
        </Label>
        </>
    )
}

export default Check