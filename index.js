const BLOGS= [
{
    id:1,
    title:"Blog 1",
    intro:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    description:
    `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
    date :new Date(),
    image:
    "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"

},
{
    id:2,
    title:"Blog 2",
    intro:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    description:
    `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
    date :new Date(),
    image:
    "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"

},
{
    id:3,
    title:"Blog 3",
    intro:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    description:
    `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
    date :new Date(),
    image:
    "https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"

},

]

const blogsContainer = document.getElementById("blogs-container");

const addBlogfile = ({id,date,title,intro}) => {
    const blog=document.createElement("div");
    blog.className="w-full md:w-[45%]"
    blog.innerHTML=`
        <p class="text-gray-500 text-sm">${date}</p>
        <h3 class="mt-1 text-lg font-semibold">${title}</h3>
        <p class="mt-3 text-gray-500">
        ${intro}
        </p>
        <button onclick="showBlogDetails(${id})" id="${id}" class="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
        Read full story
        </button>
    `;
    blogsContainer.append(blog);

};

BLOGS.forEach((blog) => {
    addBlogfile(blog);
});

const showBlogDetails=(id) => {
    const blogDetails = document.getElementById("blog-details");
    blogDetails.className= blogDetails.className.replace("hidden","visible");
    console.log(blogDetails);

}

