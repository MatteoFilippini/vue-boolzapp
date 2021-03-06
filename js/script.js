dayjs.extend(dayjs_plugin_customParseFormat)

const root = new Vue({
    el: '#root',
    data: {
        currentContact: 0,
        textMessage: '',
        searchText: '',
        user: {
            name: 'Matteo Filippni',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
    },
    methods: {
        // PRENDO IL SINGOLO CONTATTO
        currentChat(index) {
            this.currentContact = index;
        },
        // VEDO SE HO INVIATO IL MESSAGGIO
        isSent(indexMes) {
            return this.contacts[this.currentContact].messages[indexMes].status === 'received';
        },
        // INVIO DI UN MESSAGGIO
        sendMessage() {
            if (!this.textMessage) return;
            this.addMessage(this.textMessage, 'received');
            this.textMessage = ''
            setTimeout(() => {
                this.addMessage('ok', 'sent')
            }, 3000)
        },
        // CREAZIONE NUOVO MESSAGGIO
        addMessage(text, status) {
            const newMessage = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text,
                status
            };
            this.contacts[this.currentContact].messages.push(newMessage);
        },
        // CERCA CONTATTTO
        searchContacts() {
            this.contacts.filter((contact) => {
                const lowerName = contact.name.toLowerCase();
                contact.visible = lowerName.includes(this.searchText.toLowerCase());
            });
        },
        // CANCELLA MESSAGGIO
        deleteMessage(indexMes) {
            this.contacts[this.currentContact].messages.splice(indexMes, 1)
        }
    }
})

