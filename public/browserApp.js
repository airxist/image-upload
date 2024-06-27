// the base url
const url = 'http://localhost:3000/api/v1/products';

// selected elements
const fileFormDOM = document.querySelector('.product-form')
const btn = document.querySelector('.btn');
const productName = document.querySelector('#name');
const productPrice = document.querySelector('#price');
const photo = document.querySelector('#photo');
// contaner 
const container = document.querySelector('.product-container');
// declare a var
let imageSource

// functions
const handleSubmit = async (e) => {
  console.log("submitting form")
  e.preventDefault();
  const product = {
    name: productName.value,
    price: productPrice.value,
    picture: imageSource
  }

  try {
    const { data } = await axios.post(url, product);
    fetchPhotos();
  } catch (error) {
    console.log(error);
  }
  imageSource = null;
}

const handleChange = async (e) => {
  const photoFile = e.target.files[0];
  const formData = new FormData();
  formData.append('photo',photoFile);
  try {
    const { 
      data: {
        photo : { src }
      }
    } = await axios.post(`${url}/upload`, formData, {
      headers: {
        'Content-Type':'multipart/form-data'
      }
    });
    imageSource = src;
  } catch (error) {
    console.log(error);
    imageSource = null;
  }
}

const fetchPhotos = async () => {
  try {
    const { data: { products }} = await axios.get(url);
    const productArticle = products.map(product => {
      const {
        name,
        price,
        picture
      } = product
      return (
        `<article class='product'>
          <div class='image-container'>
            <img src='${picture}' alt='pic' />
          </div>
          <h3>${name}</h3>
          <p>${price}</p>
        </article>`
      )
    }).join('');
    container.innerHTML = productArticle;
  } catch (error) {
    console.log(error);
  }
}

// adding event listeners
// fileFormDOM.addEventListener('submit', e => handleSubmit(e));

btn.addEventListener('click', e => handleSubmit(e))

photo.addEventListener('change', e => handleChange(e))
