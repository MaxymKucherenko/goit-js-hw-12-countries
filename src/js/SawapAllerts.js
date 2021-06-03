import Swal from 'sweetalert2';

export const swalAlert = message => {
  Swal.fire({
    icon: 'error',
    title: 'Country is not found',
    text: `Something went wrong! -  ${message}`,
  });
};
