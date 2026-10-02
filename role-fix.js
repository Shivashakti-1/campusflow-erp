// Keep Student Demo completely separate from any previous Supabase admin session.
const roleFixClient = window.supabase?.createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY);
const studentRoleButton = document.querySelector('#studentRole');
if (studentRoleButton) studentRoleButton.onclick = async () => {
  if (roleFixClient) await roleFixClient.auth.signOut();
  state.user = null;
  state.isAdmin = false;
  state.demoStudent = true;
  document.querySelector('#roleChooser').classList.add('hidden');
  document.querySelector('#loginFields').classList.remove('hidden');
  document.querySelector('#email').value = 'student.demo@campusflow.demo';
  document.querySelector('#password').value = 'studentdemo';
  showToast('Student demo selected — any credentials are accepted');
};
