import css from '../SearchBox/SearchBox.module.css'

export default function SearchBox({ value, onChange }) {
  return (
    <div >
      <label className={css.find}>
        Find contacts by name:
        <input
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          placeholder="Enter name..." 
        />
      </label>
    </div>
  );
}
