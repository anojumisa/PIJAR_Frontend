export const mockClass = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Belajar Design UI UX",
          image_url: "https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category_id: 1,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor01",
          },
          average_rate: 4.5,
          is_replay: true
        },
        {
          id: 2,
          title: "Python Untuk Pemula ",
          image_url: null,
          category_id: 2,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor02",
          },
          average_rate: null,
          is_replay: false
        },
        {
          id: 3,
          title: "Design Pemula Pakai Adobe Ilustrator super mudah komplit",
          image_url: "https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category_id: 2,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor02",
          },
          average_rate: 3.5,
          is_replay: true
        },
        {
          id: 4,
          title: "Belajar Design UI UX",
          image_url: "https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          sub_categories: 
            { category_id: 2, sub_category_name: "Photoshop" },
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor02",
          },
          average_rate: null,
          is_replay: false
        },
        {
          id: 5,
          title: "Python Untuk Pemula",
          image_url: null,
          category_id: 2,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor03",
          },
          average_rate: null,
          is_replay: false
        },
        {
          id: 6,
          title: "Design Pemula Pakai Adobe Ilustrator",
          image_url: "https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category_id: 3,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor02",
          },
          average_rate: null,
          is_replay: false
        },
        {
          id: 7,
          title: "Belajar Design UI UX",
          image_url: "https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category_id: 3,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor03",
          },
          average_rate: 5,
          is_replay: true
        },
        {
          id: 8,
          title: "Dasar-Dasar Pengembangan Website: HTML, CSS dan JavaScript",
          image_url: null,
          category_id: 3,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor01",
          },
          average_rate: null,
          is_replay: false
        },
        {
          id: 9,
          title: "Design Pemula Pakai Adobe Ilustrator",
          image_url: "https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          category_id: 3,
          mentor_details:{
            mentor_id: 1,
            fullname: "mentor02",
          },
          average_rate: null,
          is_replay: false
        },
      ]);
    }, 500);
  });
};
