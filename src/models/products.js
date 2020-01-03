export default {
  namespace: 'products',
  // namespace: 'pdtModel',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}