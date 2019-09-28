'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Property = use('App/Models/Property')
class PropertyController {

  async index({
    request,
    response,
    view
  }) {
    const {
      latitude,
      longitude
    } = request.all();
    const properties = await Property.query().with('images').nearBy(latitude, longitude, 10).fetch();
    return properties;
  }


  async store({
    auth,
    request,
    response
  }) {
    const {
      id
    } = auth.user;
    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])

    const property = await Property.create({
      ...data,
      user_id: id
    });

    return property;
  }

  async show({
    params,
    request,
    response,
    view
  }) {
    const property = await Property.findOrFail(params.id);
    await property.load('images')
    return property;
  }


  async update({
    params,
    request,
    response
  }) {
    const property = await Property.findOrFail(params.id)

    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])

    property.merge(data);

    await property.save();

    return property;
  }

  async destroy({
    params,
    auth,
    response
  }) {
    const properties = await Property.findOrFail(params.id);

    if (properties.user_id !== auth.user.id) {
      return response.status(404).send({
        error: "Unauthorized"
      });
    }
    await properties.delete();
    return response.status(204);
  }
}

module.exports = PropertyController
