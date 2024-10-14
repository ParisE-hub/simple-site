/* eslint-disable react/no-unescaped-entities */
export default function Listitem(attribute) {
    return(
        <li key={1} className="list-item">
            <h4>
                <span>My name is</span> {attribute.user_name}
                </h4>
                and I'm <strong>{attribute.user_age}</strong></li>
    )
}