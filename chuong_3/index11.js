function App(){
    const myArr = ['HTML','CSS','JS']
    return(
        <div className="App">
            <CourseList data={this.myArr} />
        </div>
    );
}

class PostList extends React.Component{
    render(){
    return(
        <div className="post-list">
            <PostItem tilte='Giới thiệu về C# và .NET platform' desc='Khoá học hướng dẫn nhập môn ngôn ngữ C#' publisheAt='Hai ngày trước'/>
            <PostItem
                title='Giới thiệu về ReactJS'
                desc='Khoá học hướng dẫn nhập môn lập trình với ReactJS'
                publisheAt='Một ngày trước'
            />
            <PostItem
                title='Giới thiệu về NodeJS'
                desc='Khoá học hướng dẫn nhập môn lập trình với NodeJS'
                publisheAt='Ba ngày trước'
            />
        </div>
    );
}
}

class Course extends React.Component{
    render(){
        return(
            <li key={index}>{name}</li>
    )
    }
}
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);