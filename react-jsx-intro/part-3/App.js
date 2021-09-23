const App = () => {
  return (
    <div>
      <Person
        name="Rylei"
        age={32}
        hobbies={["guitar", "programming", "watching anime"]}
      />
      <Person
        name="Luffy"
        age={19}
        hobbies={["pirate", "fighting", "eating"]}
      />
      <Person
        name="Zoro"
        age={20}
        hobbies={["pirate", "swordsman", "fighting"]}
      />
    </div>
  );
}