import { useForm } from "react-hook-form";

const Search = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="group-field">
                    <input {...register("search")} id="search" className="form-control" placeholder="Search..." />
                    <button type="submit" className="btn icon-btn" ><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>         
            </form>
        </>
    );
}

export default Search;
