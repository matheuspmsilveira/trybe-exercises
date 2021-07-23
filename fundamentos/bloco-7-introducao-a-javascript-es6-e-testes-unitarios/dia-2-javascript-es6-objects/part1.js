const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const mainOrderValues = Object.values(order);
  const addressValues = Object.values(mainOrderValues[2]);
  const orderValues = Object.values(mainOrderValues[3]);
  const deliveryValues = Object.values(orderValues[2]);

  console.log(`Olá ${deliveryValues[0]}, entrega para: ${mainOrderValues[0]}, Telefone: ${mainOrderValues[1]}, R. ${addressValues[0]}, Nº: ${addressValues[1]}, AP: ${addressValues[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);