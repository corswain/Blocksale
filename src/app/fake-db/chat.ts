export class ChatFakeDb {
  public static contacts = [
    {
      id: '5725a680b3249760ea21de52',
      name: 'Agent 1',
      avatar: 'assets/images/avatars/profile.jpg',
      status: 'online',
      mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: '5725a680606588342058356d',
      name: 'Agent 2',
      avatar: 'assets/images/avatars/profile.jpg',
      status: 'offline',
      mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: '5725a68009e20d0a9e9acf2a',
      name: 'Agent 3',
      avatar: 'assets/images/avatars/profile.jpg',
      status: 'do-not-disturb',
      mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      unread: null
    }
  ];

  public static chats = [
    {
      id: '1725a680b3249760ea21de52',
      dialog: [
        {
          who: '5725a680b3249760ea21de52',
          message: 'Welcome !',
          time: '2018-07-22T08:54:28.299Z'
        },
        {
          who: '5725a6802d10e277a0f35724',
          message: 'I Need Help !!',
          time: '2018-07-22T08:55:28.299Z'
        },
        {
          who: '5725a6802d10e277a0f35724',
          message: 'I lost my wallet.',
          time: '2018-07-22T09:02:28.299Z'
        },
        {
          who: '5725a680b3249760ea21de52',
          message: 'Please hold....',
          time: '2018-07-22T09:05:28.299Z'
        }
      ]
    }
  ];

  public static user = [
    {
      id: '5725a6802d10e277a0f35724',
      name: 'John Doe',
      avatar: 'assets/images/avatars/profile.jpg',
      status: 'online',
      mood: 'Testing mood',
      chatList: [
        {
          id: '1725a680b3249760ea21de52',
          contactId: '5725a680b3249760ea21de52',
          name: 'Agent 1',
          unread: 1,
          lastMessageTime: '2017-06-12T02:10:18.931Z'
        }
      ]
    }
  ];
}
