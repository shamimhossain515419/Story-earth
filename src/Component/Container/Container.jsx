

const Container = ({children}) => {
     return (
          <div className=" max-w-[2400px] mx-auto 2xl:px-32 xl:px-24 md:mx-32 lg:px-20 md:px-16  ">
               {children}
          </div>
     );
};

export default Container;