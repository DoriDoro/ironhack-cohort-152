/////////// Axios config
// use Axios = create a ready-to-use API Handler object
const productAPI = axios.create({
  baseURL: "http://localhost:8001"
});

///////////
// CREATE
function create(clbk, data) {
  productAPI
    .post("/products", data)
    .then(serverRes => clbk())
    .catch(serverErr => console.error(serverErr));
}

//////////
// READ

function read(clbk) {
  productAPI
    .get("/products")
    .then(serverRes => clbk(serverRes.data))
    .catch(serverErr => console.error(serverErr));
}

/////////////
// UPDATE
function update(clbk, payload) {
  productAPI
    .patch(`/products/${payload.id}`, { name: payload.name })
    .then(serverRes => clbk(serverRes.data))
    .catch(serverErr => console.log(serverErr));
}

////////////
// DELETE
function destroy(clbk, id) {
  productAPI
    .delete(`/products/${id}`)
    .then(serverRes => clbk(serverRes))
    .catch(serverErr => console.log(serverErr));
}

export default {
  create,
  read,
  update,
  destroy
}