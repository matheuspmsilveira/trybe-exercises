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
  const newOrder = {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    },
  };
  Object.assign(order, newOrder);
  const mainOrderValues = Object.values(order);
  const orderValues = Object.values(mainOrderValues[3]);
  const pizzaKeys = Object.keys(orderValues[0]);
  const drinkValues = Object.values(orderValues[1]);
  const cokeValues = Object.values(drinkValues[0]);
  const paymentValues = Object.values(mainOrderValues[4])
  console.log(`Olá ${mainOrderValues[0]}, o total do seu pedido de ${pizzaKeys[0]}, ${pizzaKeys[1]} e ${cokeValues[0]} é R$ ${paymentValues[0]},00.`)
}

orderModifier(order);
