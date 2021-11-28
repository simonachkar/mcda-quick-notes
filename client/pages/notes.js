const Notes = (props) => {
    console.log(props.data);
    return (
        <p>This is the notes page</p>
    )

}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3001/get-notes')
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Notes