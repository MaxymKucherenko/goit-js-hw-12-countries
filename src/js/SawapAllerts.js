import Swal from 'sweetalert2';

export const swalAlert = message => {
  Swal.fire({
    icon: 'error',
    text: `Something went wrong! -  ${message}`,
  });
};
