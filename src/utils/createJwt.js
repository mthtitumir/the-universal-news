
const createJwt = async (payload) => {
    try {
        const res = await fetch('/api/auth', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
    } catch (error) {
        console.log(error.message);
    }
}

export default createJwt