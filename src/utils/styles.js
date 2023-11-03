

export const selectStatusColor = (status) => {
    switch (status) {
        case 'Alive':
          return '#59CE8F';
        case 'Dead':
          return '#FF1E00';
        default:
          return '#476072';
      }
  };

  export const selectGenderSymbol = (gender) => {
    switch (gender) {
        case 'Male':
          return '♂';
        case 'Female':
          return '♀';
        case 'Genderless':
          return '⚤';
        default:
          return '?';
      }
  };