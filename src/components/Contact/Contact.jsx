import css from '../Contact/Contact.module.css'

export default function Contact({ contactInf, onDelete }) {
    return (
        <div className={css.item}>
            <div className={css.info}>
                <p className={css.name}>{contactInf.name}</p>
                <p className={css.number}>{contactInf.number}</p>
            </div>
            <button className={css.button} onClick={() => onDelete(contactInf.id)}>Delete</button>
        </div>
    )
}