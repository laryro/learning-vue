const currentDate = () => new Date(Date.now()).toLocaleString();
const COOKIE_NAME = 'notemaster_notes';

var app = new Vue({
  el: '#app',
  data() {
    const notes = Cookies.getJSON(COOKIE_NAME) || [];

    return {
      title: 'Notemaster',
      errors: 0,
      note: {
        title: '',
        text: '',
        color: '',
      },
      colors: [
        'red', 'green', 'blue'
      ],
      notes
    }
  },
  methods: {
    submit() {
      this.errors = 0;
      const { text, title } = this.note;

      if (!text) {
        this.errors++;
      }
      if (!title) {
        this.errors++;
      }

      if (this.errors) {
        return false;
      }

      this.notes.push({
        text,
        title,
        date: currentDate()
      });
      Cookies.set(COOKIE_NAME, this.notes);

      this.errors = 0;
      this.note = {
        title: '',
        text: '',
        color: '',
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1);
      Cookies.set(COOKIE_NAME, this.notes);
    },
    showError(field) {
      return !field && this.errors;
    }
  },
});

