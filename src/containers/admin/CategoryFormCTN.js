import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AddLoaispAPI,
  EditLoaispAPI,
  UpLoaispAPI
} from "../../actions/ActionAdmin";
export class CategoryFormCTN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      tenloai: "",
    };
  }
  componentDidMount() {
    let { match, editcategory } = this.props;
    if (match.params.id) {
      editcategory(match.params.id);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.EditCategory) {
      let { EditCategory } = nextProps;
      this.setState({
        id: EditCategory.id,
        tenloai: EditCategory.tenloai,
        tinhtrang: EditCategory.tinhtrang
      });
    }
  }
  handleOnChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let { id, tenloai,  } = this.state;
    let { history, addcategory, upcategory } = this.props;
    let loaisp = {
      id,
      tenloai: tenloai,
    };
    if (id) {
      this.setState({
        tenloai,
      });
      upcategory(loaisp);
      history.push("/admin/category");
    } else {
      this.setState({
        tenloai,
      });
      addcategory(loaisp);
      history.push("/admin/category");
    }
  };

  render() {
    console.log(this.state);
    let { tinhtrang, tenloai } = this.state;
    return (
      <div id="content">
        <form className="forminput" onSubmit={this.handleSubmit}>
          <div className="form-group form-inline">
            <label htmlFor="name">Tên Loại Sản Phẩm :</label>
            <input
              type="text"
              name="tenloai"
              className="form-control inputform"
              placeholder="Nhập Tên Loại Sản Phẩm ... "
              onChange={this.handleOnChange}
              aria-describedby="helpId"
              defaultValue={tenloai}
            />
            <small id="helpId" className="text-muted"></small>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    EditCategory: state.AdCategory
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addcategory: loaisp => {
      dispatch(AddLoaispAPI(loaisp));
    },
    editcategory: id => {
      dispatch(EditLoaispAPI(id));
    },
    upcategory: loaisp => {
      dispatch(UpLoaispAPI(loaisp));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFormCTN);
