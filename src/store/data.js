export default {
  namespaced: true,
  state: {
    items: [
      {
        name: "Daniel",
        lastName: "Lobo",
        email: "dajolo1995@gmail.com",
        phone: "30000000",
        pais: "Colombia",
        city: "Santa Marta",
        dateOfBirth: "12 diciembre 2000",
        gender: "M",
        children: "si",
        numberOfChildren: 2,
      },
      {
        name: "Jose",
        lastName: "Ramos",
        email: "dajolo1995@hotmail.com",
        phone: "1234",
        pais: "Colombia",
        city: "Santa Marta",
        dateOfBirth: "enero 15 1900",
        gender: "M",
        children: "No",
        numberOfChildren: 0,
      },
    ],
  },

  mutation: {
    async updateData(state, items) {
      state.items = items;
    },
  },
};
