export const style = {
  textDecorationLine: '',
};

// export function handleCheckbox(estilo) {
//   if (estilo.textDecorationLine === '') {
//     estilo.textDecorationLine = 'line-through';
//   } else {
//     estilo.textDecorationLine = '';
//   }
// }

export const handleShare = (history, setAlert) => {
  const copyText = `http://localhost:3000${history.location.pathname}`;
  navigator.clipboard.writeText(copyText);
  setAlert(true);
};
