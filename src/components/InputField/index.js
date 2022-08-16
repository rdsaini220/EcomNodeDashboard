import { useForm } from "react-hook-form";

const InputField = (props) => {
    const {
        type = 'text',
        placeholder = '',
        inputClass = '', 
    } = props;
    return (
        <>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input id="search" className="form-control" aria-describedby="searchHelp" />
                <div id="searchHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div> 
        </>
    );
}

export default InputField;
