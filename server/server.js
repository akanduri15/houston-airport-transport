const app = require('./src/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Houston Airport Transport API`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});