let arrayList = [
    { title: 'Blog 1', body: 'lorem ipsum 1', author: 'yazar1' },
    { title: 'Blog 2', body: 'lorem ipsum 2', author: 'yazar2' },
    { title: 'Blog 3', body: 'lorem ipsum 3', author: 'yazar3' },
    { title: 'Blog 4', body: 'lorem ipsum 4', author: 'yazar4' },
    { title: 'Blog 5', body: 'lorem ipsum 5', author: 'yazar5' }
];

let newPost = {
    title: 'başlık',
    body: 'içerik',
    author: 'yazar'
};
const postCreate = (newPost) => {
    return new Promise((resolve, reject) => {

        if (newPost) {
            arrayList.push(newPost);
            resolve("post eklendi");
            console.log(newPost);
        }
        else {
            reject("hata oluştu");
        }

    });
}

const postList = (arrayList) => {
    return new Promise((resolve, reject) => {
        console.log("postlar listeleniyor...");

        if (arrayList) {
            resolve("listeleme başarılı.");
            console.log(arrayList);
        }
        else {
            console.log("listeleme başarısız");
        }
    });
}

async function postSort(array) {
    try {

        let sortedPost = await postList(arrayList);
        console.log(sortedPost);

        let addedPost = await postCreate(array);
        console.log(addedPost);

        sortedPost = await postList(arrayList);
        console.log(sortedPost);

    }
    catch (err) {
        console.log(err);
    }
}

postSort(newPost);
