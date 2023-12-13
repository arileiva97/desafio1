class ProductManager{
    products;
    static lettersCode = "abc";
    static numbersCode = 123;
    static code = this.lettersCode + this.numbersCode; // code está formado por una parte alfabética y otra numérica

    constructor(){
        this.products = [];
    }

    read(){
        return this.products;
    }

    create(title, description, price, photo, stock){
        const newProduct = {
            title,
            description,
            price,
            photo,
            code: ProductManager.code,
            stock
        }

        const productSearched = this.products.find((product) => product.code === newProduct.code)
        if(productSearched === undefined){
            this.products.push(newProduct);
            /* if(ProductManager.numbersCode <= 999){
                ProductManager.numbersCode++; // (este código va a servir luego para que cada producto nuevo tenga un code (id) distinto)
            }else{
                ProductManager.lettersCode = "abd";
                ProductManager.numbersCode = 100;
            } */
            
        }else{
            console.error(`The product already exists (Code ${newProduct.code})`)
        }
        
    }

    readOne(code){
        const productSearched = this.products.find((product) => product.code === code)
        if(productSearched){
            console.log(productSearched);
        }else{
            console.error(`Product (Code ${code}) not found`);
        }
    }
}

class UserManager{
    users;
    static id = 1;

    constructor(){
        this.users = [];
    }

    read(){
        return this.users;
    }

    create(name, photo, email){
        const newUser = {
            id,
            name,
            photo,
            email
        }

        const userSearched = this.users.find((user) => user.name === newUser.name)
        if(userSearched === undefined){
            this.users.push(newUser);
            UserManager.id++
        }else{
            console.error(`The user already exists (Name ${newProduct.name})`)
        }
        
    }

    readOne(id){
        const userSearched = this.users.find((user) => user.id === id)
        if(userSearched){
            console.log(userSearched);
        }else{
            console.error(`User (Id ${id}) not found`);
        }
    }
}

const productManager = new ProductManager();
const products = productManager.read();

const userManager = new UserManager();
const users = userManager.read();