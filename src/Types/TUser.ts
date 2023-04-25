export type TUser = {
    id: number,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    birthday: string,
    phone: string,
    address: string,
    job: string,
    father: string,
    mother: string,
    myself: string,
    travel: string,
    anecdote: string,
    album: [{
        id: number,
        name: string,
        photo: [{
            id: number,
            photo: string,
            information: string,
            mimeType: string
        }],
}],
    access_token: string
}