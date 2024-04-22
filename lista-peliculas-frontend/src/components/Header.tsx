export type HeaderProps = {
    title: string;
}

function Header({title}: HeaderProps){
    //props.tittle
    //props.subtitle
    return(
        <header>
            {title}
        </header>
    )
}

export default Header;