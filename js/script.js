const { createApp } = Vue
createApp({
  data() {
    return {
      chatCorrente: 0,
      newmessage:'',
      searchTerm:'',
      msgOpt:{
        index: null,
        show: false
      },
        contacts: [
            {
            id: 1,
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            // -----------------------------------------
            {
            id: 2,
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            // -----------------------------------------
            {
            id: 3,
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            id: 4,
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            id: 5,
            name: 'Alessandro L.',
            avatar: '_5',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            id: 6,
            name: 'Claudia',
            avatar: '_6',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novit???',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            id: 7,
            name: 'Federico',
            avatar: '_7',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            id: 8,
            name: 'Davide',
            avatar: '_8',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ]
    }

  },
  computed:{
    filteredContacts(){
      return this.contacts.filter((item)=>{
        const name = item.name.toLowerCase();
        return name.includes(this.searchTerm.toLowerCase())
      })
    }
  },
  methods:{
    setChat(id){
      this.chatCorrente = this.contacts.findIndex((item)=>{
        return item.id == id
      });
    },
    sendMessage(){
      if(!this.newmessage){return}
      const d = new Date();
      let data = d.toDateString();
      const newSentMessage = {
        date: data,
        message: this.newmessage,
        status: 'sent'
      }
      this.contacts[this.chatCorrente].messages.push(newSentMessage);
      this.newmessage = '';
      this.$nextTick(()=>{
        const el = this.$refs.msg[this.$refs.msg.length - 1];
        el.scrollIntoView();
      })
      setTimeout(()=>{
        const messaggiRandom= [
          'ok',
          'bene',
          'fantastico',
          'va benissimo',
          'ovvio',
          'certamente'
        ];
        let random = Math.floor(Math.random() * (messaggiRandom.length));
        console.log(random)
        let messRandom = messaggiRandom[random];
        const d = new Date();
        let data = d.toLocaleString('it-IT');
        const newMessage = {
          date: data,
          message: messRandom,
          status: 'received'
        }
        this.contacts[this.chatCorrente].messages.push(newMessage);
        this.$nextTick(()=>{
          const el = this.$refs.msg[this.$refs.msg.length - 1];
          el.scrollIntoView();
        })
      }, 1000)
    },
    showOpt(i){
      if(i === this.msgOpt.index && this.msgOpt.show){
        this.msgOpt.index = null;
        this.msgOpt.show = false;
      }
      else{
        this.msgOpt.index = i;
        this.msgOpt.show = true;
      }
      
    },
    elimina(i){
      this.contacts[this.chatCorrente].messages.splice(i, 1);
      this.msgOpt.index = null;
      this.msgOpt.show = false;
    },
    getLastMessage(i){
      if(this.contacts[i].messages.length > 0){
        return this.contacts[i].messages[this.contacts[i].messages.length - 1].message.slice(0, 30) + ' ...'
      }
    }
  },

}).mount('#app')

