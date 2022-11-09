export default {
    props: ['email'],
    template: `
    

                <td>
                  <input type="checkbox" />
                  ⭐
                </td>
                <td :class="{bold:!email.isRead}">{{sendFrom}}</td>
                <td :class="{bold:!email.isRead}">{{subject}}</td>
                <td :class="{bold:!email.isRead}">{{date}}</td>
                 
                `,

    computed: {
        sendFrom() {
            const from = this.email.from.split('@');
            return from[0];
        },
        date() {
            return new Date(this.email.sentAt).toDateString().substring(4, 10);
        },
        subject() {
            return this.email.subject.substring(0, 70) + '...';
        },
    },
};
