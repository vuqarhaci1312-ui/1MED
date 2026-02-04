/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const HeaderNewsLetter = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("E-poçtunuz üçün təşəkkürlər!")
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <div className="input-group stylish-input-group">
                    <input type="email" placeholder="E-poçtunuzu daxil edin" className="form-control" name="email" autoComplete='off' />
                    <span className="input-group-addon">
                        <button type="submit">
                            <i className="fas fa-arrow-right" />
                        </button>
                    </span>
                </div>
            </form>
        </>
    );
};

export default HeaderNewsLetter;