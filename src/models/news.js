export default {
  namespace: 'news',
  // namespace: 'pdtModel',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}