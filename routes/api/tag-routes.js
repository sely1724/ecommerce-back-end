const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const tagsData = await Product.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagsData) {
      res.status(404).json({ message: "No tags found with that id!" });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag

  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateTag[0]) {
      res.status(404).json({ message: "Can't find tag" });
      return;
    }
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value

  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteTag) {
      res.status(404).json({ message: "Can't find tag" });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
