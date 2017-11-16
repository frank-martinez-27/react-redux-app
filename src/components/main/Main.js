import *  as React from 'react';
import { Route, Switch, Redirect, NavLink, HashRouter } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../routes';
import './Main.css';

const Main = (props) => (
  <HashRouter>
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">Frank Martinez - React Projects</a>
        </div>
        <ul className="nav navbar-right top-nav">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope" /> <b className="caret" /></a>
            <ul className="dropdown-menu message-dropdown">
              <li className="message-preview">
                <a href="#">
                  <div className="media">
                    <span className="pull-left">
                      <img className="media-object" src="http://placehold.it/50x50" alt="" />
                    </span>
                    <div className="media-body">
                      <h5 className="media-heading"><strong>Message Notification</strong>
                      </h5>
                      <p className="small text-muted"><i className="fa fa-clock-o" /> Yesterday at 4:32 PM</p>
                      <p>This is an example of how a message notification looks...</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="message-preview">
                <a href="#">
                  <div className="media">
                    <span className="pull-left">
                      <img className="media-object" src="http://placehold.it/50x50" alt="" />
                    </span>
                    <div className="media-body">
                      <h5 className="media-heading"><strong>John Smith</strong>
                      </h5>
                      <p className="small text-muted"><i className="fa fa-clock-o" /> Yesterday at 4:32 PM</p>
                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="message-footer">
                <a href="#">Read All New Messages</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell" /> <b className="caret" /></a>
            <ul className="dropdown-menu alert-dropdown">
              <li>
                <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
              </li>
              <li>
                <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
              </li>
              <li>
                <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
              </li>
              <li>
                <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
              </li>
              <li>
                <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
              </li>
              <li>
                <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">View All</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" /> Frank Martinez <b className="caret" /></a>
            <ul className="dropdown-menu">
              <li>
                <a href="#"><i className="fa fa-fw fa-user" /> My Profile</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-fw fa-envelope" /> My Inbox</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-fw fa-gear" /> Settings</a>
              </li>
              <li className="divider" />
              <li>
                <a href="#"><i className="fa fa-fw fa-power-off" /> Log Out</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav side-nav">
            <li>
              <NavLink to="home.html" activeClassName="active"><i className="fa fa-fw fa-dashboard" /> Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="charts.html"><i className="fa fa-fw fa-bar-chart-o" /> Charts</NavLink>
            </li>
            <li>
              <NavLink to="tables.html"><i className="fa fa-fw fa-table" /> Tables</NavLink>
            </li>
            <li>
              <NavLink to="forms.html"><i className="fa fa-fw fa-edit" /> Forms</NavLink>
            </li>
            <li>
              <NavLink to="bootstrap-elements.html"><i className="fa fa-fw fa-desktop" /> Bootstrap Elements</NavLink>
            </li>
            <li>
              <NavLink to="bootstrap-grid.html"><i className="fa fa-fw fa-wrench" /> Bootstrap Grid</NavLink>
            </li>
            <li>
              <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v" /> Dropdown <i className="fa fa-fw fa-caret-down" /></a>
              <ul id="demo" className="collapse">
                <li>
                  <NavLink to="/itunes">Search on iTunes...</NavLink>
                </li>
                <li>
                  <NavLink to="/countdown">Countdown Timer</NavLink>
                </li>
                <li>
                  <NavLink to="#">Redux Authentication</NavLink>
                </li>
                <li>
                  <NavLink to="/binding">Data Binding</NavLink>
                </li>
                <li>
                  <NavLink to="/stock">Stock Data Viewer and Filter</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about"><i className="fa fa-fw fa-file" /> About</NavLink>
            </li><li>
              <NavLink to="/courses"><i className="fa fa-fw fa-file" /> Courses</NavLink>
            </li>
            <li>
              <NavLink to="/index-rtl.html"><i className="fa fa-fw fa-dashboard" /> RTL Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="RoutesContainer">
        <Switch>
          {props.routes.map((route, idx) => (
            <RouteWithSubRoutes key={idx} {...route} />
          )
          )}
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  </HashRouter>
);
export default Main;
