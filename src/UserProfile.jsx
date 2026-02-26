function UserProfile({ name, bmi, category }) {
  return (
    <div className="text-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        User Profile
      </h1>

      <h2 className="text-xl">
        Name: <span className="font-semibold">{name}</span>
      </h2>

      <h2 className="text-xl mt-2">
        BMI: <span className="font-semibold">{bmi}</span>
      </h2>

      <h3 className="text-lg mt-2">
        Category: {category}
      </h3>
    </div>
  );
}

export default UserProfile;