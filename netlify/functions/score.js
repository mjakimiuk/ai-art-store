exports.handler = async (event) => {
  try {
    const { averageScore } = JSON.parse(event.body);
    const newScore = averageScore * 10;
    return {
      statusCode: 200,
      body: JSON.stringify({ newScore }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
