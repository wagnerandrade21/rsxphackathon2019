class PostsController {
  async index(req, res) {
    return res.json([
      {
        id: 1,
        author: {
          name: 'Instituição 1',
          avatar: 'user.svg',
        },
        date: '04 Jun 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dictum ipsum, eu elementum orci. Vivamus ligula sem, consectetur a dolor ut, semper rhoncus massa. Duis sit amet accumsan ipsum. Ut quis gravida risus. Quisque congue molestie pulvinar. Donec ultricies est eu lobortis interdum. Nam maximus scelerisque diam, nec rutrum nulla rutrum vitae. Vestibulum ac tellus nec dui lobortis pretium. Nulla commodo libero lacus, at dignissim dui pharetra in. Aliquam ac quam non lorem sodales varius. Nunc fringilla tempor leo at tincidunt. Praesent dictum, felis in mollis condimentum, nisi turpis aliquet elit, eu blandit lorem dui a massa. Vestibulum quis neque tortor. Fusce sit amet vestibulum leo. Phasellus lorem ligula, molestie et pharetra at, bibendum sit amet turpis. Donec eget turpis at massa consequat placerat at sed justo.',
        comments: [],
      },
      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'user.svg',
        },
        date: '04 Jun 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dictum ipsum, eu elementum orci. Vivamus ligula sem, consectetur a dolor ut, semper rhoncus massa. Duis sit amet accumsan ipsum. Ut quis gravida risus. Quisque congue molestie pulvinar. Donec ultricies est eu lobortis interdum. Nam maximus scelerisque diam, nec rutrum nulla rutrum vitae. Vestibulum ac tellus nec dui lobortis pretium. Nulla commodo libero lacus, at dignissim dui pharetra in. Aliquam ac quam non lorem sodales varius. Nunc fringilla tempor leo at tincidunt. Praesent dictum, felis in mollis condimentum, nisi turpis aliquet elit, eu blandit lorem dui a massa. Vestibulum quis neque tortor. Fusce sit amet vestibulum leo. Phasellus lorem ligula, molestie et pharetra at, bibendum sit amet turpis. Donec eget turpis at massa consequat placerat at sed justo.',
        comments: [],
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'user.svg',
        },
        date: '04 Jun 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dictum ipsum, eu elementum orci. Vivamus ligula sem, consectetur a dolor ut, semper rhoncus massa. Duis sit amet accumsan ipsum. Ut quis gravida risus. Quisque congue molestie pulvinar. Donec ultricies est eu lobortis interdum. Nam maximus scelerisque diam, nec rutrum nulla rutrum vitae. Vestibulum ac tellus nec dui lobortis pretium. Nulla commodo libero lacus, at dignissim dui pharetra in. Aliquam ac quam non lorem sodales varius. Nunc fringilla tempor leo at tincidunt. Praesent dictum, felis in mollis condimentum, nisi turpis aliquet elit, eu blandit lorem dui a massa. Vestibulum quis neque tortor. Fusce sit amet vestibulum leo. Phasellus lorem ligula, molestie et pharetra at, bibendum sit amet turpis. Donec eget turpis at massa consequat placerat at sed justo.',

        comments: [],
      },
    ]);
  }
}

export default new PostsController();
