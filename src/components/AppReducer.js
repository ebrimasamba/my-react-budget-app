export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      return {
        transactions: state.transactions.filter(
          (value, index) => index !== action.payload
        ),
      };

    case "ADD_TRANSACTIONS":
      return { transactions: [...state.transactions, action.payload] };
    default:
      return state;
  }
};
