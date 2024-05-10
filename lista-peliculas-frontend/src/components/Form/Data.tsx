
export type DataProps = {
    email: string,
    password: string,
}

function Data({ email, password}: DataProps){
    return (
        <section className="dataContainer">
            {
                    <>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    </>
            }
        </section>
    )
}

export default Data;