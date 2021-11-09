const Footer = () => {
  const infos = [
    {
      name: 'Breakfast',
      work: 'designer',
      link: 'https://2021.thef2e.com/users/6296427084285739247',
    },
    { name: 'Iris', work: 'developer', link: 'https://2021.thef2e.com/users/6296427084285739074' },
  ];
  return (
    <footer className='h-14 bg-primary flex items-center justify-center'>
      <div className='text-center text-white'>
        #The F2E 3rd Week01
        {infos.map((person) => (
          <a className='px-2 underline' href={person.link}>
            #{person.work}-{person.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
