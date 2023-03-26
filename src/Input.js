// CSS
import './styles/input.scss'

export const Input = ({ onChange }) => {
    return (
        <>
            <div class="search__container">
                <h2 class="search__title">Search pictures</h2>
            <input onChange={onChange} class="search__input" type="text" placeholder="Search" />
            </div>

            <div class="credits__container">
                <p class="credits__text"></p>
            </div>
        </>
    )
}