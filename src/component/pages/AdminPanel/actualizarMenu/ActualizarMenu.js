import { Container, Row, Col,  } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './actualizarMenu.scss'
import React, { useState, useEffect } from "react";
import axios from "axios";
import imageMap from "../../../pages/StudentPanel/MainMenu/imageMap";
import { faHome, faSearch, faUserEdit, faUserPlus, faBuilding, faTag, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ActualizarMenu() {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(imageMap[selectedImage]);
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    imagenProducto: "",
  });

  useEffect(() => {
    fetchData();
    fetchCategories();
    setSelectedImage("defaultImagePath");
    setPreviewImage(imageMap["defaultImagePath"]);
  }, []);

  const formatPrice = (precio) => {
    return new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
    }).format(precio);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/producto");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categoria");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  const handleInputChange = (e) => {
    console.log(e, "e");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue, "selectedValue");
    setSelectedImage(selectedValue);
    setPreviewImage(imageMap[selectedValue]);
  };

  const handleEdit = (item) => {
    setSelectedImage(item.imagenProducto);
    setPreviewImage(imageMap[item.imagenProducto]);
    setFormData(item);
    setEditId(item.idProducto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      imagenProducto: selectedImage,
    };
    console.log(selectedImage, "selectedImage");
    if (editId) {
      await axios.put(`http://localhost:4000/producto/${editId}`, payload);
    } else {
      await axios.post("http://localhost:4000/producto", payload);
    }
    fetchData();
    fetchCategories();
    setFormData({
      nombre: "",
      descripcion: "",
      precio: 0,
      categoria: { idCategoria: 0 },
      imagenProducto: "",
    });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/producto/${id}`);
    fetchData();
  };

  return (
    <Container fluid className="main-container">
    <Row>
      {/* Barra de navegación vertical */}
      <Col xs={3} className="nav-column">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/ordenes-proceso">
            <FontAwesomeIcon icon={faHome} className="icon" /> Órdenes en Proceso
          </Nav.Link>
          <Nav.Link as={Link} to="/buscar-orden">
            <FontAwesomeIcon icon={faSearch} className="icon" /> Buscar Orden
          </Nav.Link>
          <Nav.Link as={Link} to="/editar-usuario">
            <FontAwesomeIcon icon={faUserEdit} className="icon" /> Editar Usuario
          </Nav.Link>
          <Nav.Link as={Link} to="/agregar-usuario">
            <FontAwesomeIcon icon={faUserPlus} className="icon" /> Agregar Usuario
          </Nav.Link>
          <Nav.Link as={Link} to="/actualizar-cafeteria">
            <FontAwesomeIcon icon={faBuilding} className="icon" /> Actualizar Información Cafetería
          </Nav.Link>
          <Nav.Link as={Link} to="/actualizar-categoria">
            <FontAwesomeIcon icon={faTag} className="icon" /> Actualizar Categoría
          </Nav.Link>
          <Nav.Link as={Link} to="/actualizar-menu">
            <FontAwesomeIcon icon={faUtensils} className="icon" /> Actualizar Menú
          </Nav.Link>
        </Nav>
      </Col>
      {/* aquí empieza lo que está fuera de la navegación */}
        <Col xs={9} className="content-column">
          <form onSubmit={handleSubmit} className="mb-3">
            <div>
              <h2 className="mb-3">Agregar/Editar Menu</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Agregar nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Descripcion">Descripcion</label>
                    <textarea
                      rows="4"
                      type="text"
                      className="form-control"
                      id="descripcion"
                      name="descripcion"
                      placeholder="Agregar Descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 text-end">
                  <div className="form-group">
                    <label htmlFor="idCategoria">Categoria</label>
                    <select
                      className="form-control"
                      id="categoria"
                      name="categoria"
                      value={formData.categoria.idCategoria}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seleccione categoria</option>
                      {categories.map((category) => (
                        <option
                          key={category.idCategoria}
                          value={category.idCategoria}
                        >
                          {category.descripcion}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Precio">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      id="precio"
                      name="precio"
                      placeholder="Ingrese Precio"
                      value={formData.precio}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="selectedImage">
                      Selecciona una imagen:
                    </label>
                    <select
                      id="selectedImage"
                      className="form-control"
                      value={selectedImage}
                      onChange={handleImageChange}
                    >
                      <option value="">Seleccione imagen</option>
                      {Object.keys(imageMap).map((key) => (
                        <option key={key} value={key}>
                          {key.replace("_", " ")}{" "}
                        </option>
                      ))}
                    </select>

                    <div style={{ marginTop: "20px" }}>
                      {selectedImage !== "defaultImagePath" && (
                        <>
                          <h4>Previa de la imagen seleccionada:</h4>
                        </>
                      )}
                      <img src={previewImage} alt="Preview" width="200" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Guardar cambos
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Categoria</th>
                  <th>Precio</th>
                  <th>Administrar</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.idProducto}>
                    <td>{item.nombre}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.categoria.descripcion}</td>
                    <td>{formatPrice(item.precio)}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.idProducto)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ActualizarMenu;